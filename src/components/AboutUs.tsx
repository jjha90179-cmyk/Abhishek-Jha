import { motion } from 'motion/react';
import { Star, ShieldCheck, HeartPulse, Award, Flame } from 'lucide-react';
import dumbbellsImage from '../assets/images/strength_dumbbells_1782310717473.jpg';

interface AboutUsProps {
  onLearnMoreClick: () => void;
}

export default function AboutUs({ onLearnMoreClick }: AboutUsProps) {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-amber-500" />,
      title: 'Trusted Local Fitness Authority',
      description: 'The preferred fitness destination in Bhania Wala, Uttarakhand, trusted by hundreds of members.',
    },
    {
      icon: <Flame className="w-5 h-5 text-amber-500" />,
      title: 'Modern & Ergonomic Gym Equipment',
      description: 'Fully loaded with cutting-edge strength equipment, isolated weight stack pins, and advanced cardio setups.',
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-amber-500" />,
      title: 'Passionate Guidance & Vibe',
      description: 'Highly supportive coaches and an infectious high-energy vibe that keeps you coming back.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-96 h-96 bg-zinc-900/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Premium Interactive Images */}
          <div className="lg:col-span-5 relative" id="about-image-column">
            {/* Visual Gold Border Grid Offset */}
            <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-amber-500/20 pointer-events-none" />
            
            {/* Main Generated Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
            >
              <img
                src={dumbbellsImage}
                alt="Strength Dumbbells Rack at The Om Gym"
                className="w-full h-[450px] object-cover scale-100 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

              {/* Floating Google Rating Trust Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/90 backdrop-blur-md border border-amber-500/20 p-4 rounded-xl flex items-center justify-between shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
                    <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-tight">4.7 / 5 Rating</p>
                    <p className="text-zinc-400 text-xs mt-0.5">131 Verified Google Reviews</p>
                  </div>
                </div>
                <div className="bg-amber-500 text-zinc-950 font-mono font-bold text-xs px-2.5 py-1 rounded">
                  TRUSTED
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-text-column">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
                WELCOME TO THE OM GYM FITNESS CLUB
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight mb-6">
                ESTABLISHED FOR EXCELLENCE, <br />
                <span className="gold-gradient-text">FUELED BY PASSION</span>
              </h2>
              
              <p className="text-zinc-300 text-base leading-relaxed mb-6 font-sans">
                Located in the heart of <strong>Bhania Wala (Uttarakhand)</strong>, THE OM GYM FITNESS CLUB stands as a trusted landmark of premium fitness, clean health, and life-changing bodily transformations.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed mb-10">
                Spanning a spacious workout area equipped with state-of-the-art strength and cardio training units, we foster an environment that is clean, highly hygienic, and meticulously ventilated. Whether you want to build raw muscle, lose excess weight, or get professional guidance, we are fully committed to your ultimate success.
              </p>
            </motion.div>

            {/* highlights list */}
            <div className="space-y-6 mb-10">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="flex items-start space-x-4 bg-zinc-900/30 p-4 rounded-xl border border-zinc-900 hover:border-amber-500/10 transition-colors"
                >
                  <div className="p-2.5 bg-amber-500/10 rounded-lg flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white text-base font-semibold tracking-wide font-display">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <button
                onClick={onLearnMoreClick}
                className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-amber-500 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all duration-300"
              >
                Learn More About Us
              </button>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
