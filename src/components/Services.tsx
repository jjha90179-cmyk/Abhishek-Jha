import { motion } from 'motion/react';
import { Dumbbell, Target, Flame, Heart, Activity, UserCheck, ShieldAlert, Zap } from 'lucide-react';
import dumbbellsImage from '../assets/images/strength_dumbbells_1782310717473.jpg';
import trainerImage from '../assets/images/trainer_session_1782310706450.jpg';
import cardioImage from '../assets/images/cardio_zone_1782310729787.jpg';

interface ServicesProps {
  onServiceClick: (serviceTitle: string) => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  const services = [
    {
      title: 'Strength Training',
      description: 'Master raw power lifting and resistance training. Learn correct compound movements, posture alignment, and lift safety to build bulletproof strength.',
      image: dumbbellsImage,
      icon: <Dumbbell className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Weight Loss Programs',
      description: 'Scientifically calibrated fitness plans combining dynamic high-intensity circuits and caloric guidelines to burn fat while conserving lean tissue.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600',
      icon: <Target className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Muscle Building',
      description: 'Hypertrophy focused routines mapping clean progression models, isolated muscle load tracks, and optimal protein intake strategies.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=600',
      icon: <Zap className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Cardio Training',
      description: 'Boost respiratory stamina, elevate stroke volume, and condition your cardiovascular health in our premium, air-conditioned treadmill zone.',
      image: cardioImage,
      icon: <Heart className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Fat Loss Training',
      description: 'High-intensity metabolic conditioning (MetCon) that spikes your Excess Post-exercise Oxygen Consumption (EPOC) to melt calories for hours.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
      icon: <Flame className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Personal Training',
      description: 'One-on-one professional attention from expert coaches tailoring custom programs, lifestyle modifications, and direct motivational drive.',
      image: trainerImage,
      icon: <UserCheck className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Fitness Assessment',
      description: 'Comprehensive evaluations measuring body fat composition, flexibility range, muscular endurance thresholds, and functional posture scans.',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=600',
      icon: <Activity className="w-5 h-5 text-amber-500" />,
    },
    {
      title: 'Body Transformation Programs',
      description: 'Complete 90-day physical overrides synchronizing advanced workout structures, weekly body measurements, and habit rebuilding.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
      icon: <ShieldAlert className="w-5 h-5 text-amber-500" />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-yellow-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            ELITE FITNESS <span className="gold-gradient-text">PROGRAMS</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            Choose from our specialized premium programs tailored meticulously to guide you through your individual strength, athletic, and transformation journeys.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-cards-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative h-[360px] rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900/40 shadow-lg cursor-pointer"
              onClick={() => onServiceClick(service.title)}
            >
              {/* Background Card Image */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient overlay darkening the card bottom and giving texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-900/30 group-hover:via-zinc-950/90 transition-all duration-300" />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                {/* Floating Top Icon */}
                <div className="bg-zinc-900/90 backdrop-blur-md p-2.5 rounded-xl border border-zinc-800 w-fit self-end shadow-md group-hover:border-amber-500/35 transition-colors">
                  {service.icon}
                </div>

                {/* Bottom Details */}
                <div>
                  <h3 className="text-white text-lg font-bold font-display tracking-wide mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Truncated description expanding on hover on desktop */}
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300 font-sans">
                    {service.description}
                  </p>
                  
                  {/* CTA Tag */}
                  <div className="mt-4 flex items-center space-x-1.5 text-xs text-amber-500 font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Enquire Now</span>
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
