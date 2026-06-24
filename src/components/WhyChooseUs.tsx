import { motion } from 'motion/react';
import { Dumbbell, Users, Maximize, Wind, Sparkles, Flame, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Dumbbell className="w-8 h-8 text-amber-500" />,
      title: 'Premium Gym Equipment',
      description: 'Fully stocked with biomechanically correct selectorized machines, robust plate-loaded racks, and premium dumbbells.',
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: 'Friendly & Experienced Trainers',
      description: 'Our certified fitness coaches provide expert form correction, custom routines, and dedicated accountability.',
    },
    {
      icon: <Maximize className="w-8 h-8 text-amber-500" />,
      title: 'Spacious Workout Area',
      description: 'Generous square footage that prevents overcrowding, giving you the physical freedom to train comfortably.',
    },
    {
      icon: <Wind className="w-8 h-8 text-amber-500" />,
      title: 'Excellent Ventilation',
      description: 'Industrial-grade air purification and cross-ventilation flow to keep internal air crisp, cool, and oxygenated.',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      title: 'Clean & Hygienic Environment',
      description: 'Rigorous sanitization protocols with frequent machine wipe-downs and clean changing utilities for ultimate comfort.',
    },
    {
      icon: <Flame className="w-8 h-8 text-amber-500" />,
      title: 'Motivating Fitness Community',
      description: 'Surround yourself with passionate, like-minded local fitness enthusiasts driving each other to grow.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      title: 'Safe & Professional Atmosphere',
      description: 'A deeply respectful, inclusive, and safe atmosphere prioritizing correct exercise practices and security.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Decorative blurred gold spot */}
      <div className="absolute left-1/3 top-1/2 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            THE OM GYM ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            WHY THE OM GYM IS THE <span className="gold-gradient-text">ULTIMATE CHOICE</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            We do not just offer space to exercise; we offer a premium fitness lifestyle designed around comfort, results, safety, and elite community energy.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-us-grid">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-zinc-950/60 border border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/25 transition-all duration-300 shadow-md group hover:shadow-lg hover:shadow-amber-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="bg-zinc-900 p-4 rounded-xl w-fit mb-6 border border-zinc-800 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-300">
                  {reason.icon}
                </div>
                
                {/* Reason Title */}
                <h3 className="text-white text-lg font-bold tracking-wide font-display mb-3 group-hover:text-amber-400 transition-colors">
                  {reason.title}
                </h3>
                
                {/* Reason Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
