import { Star, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { Review } from '../types';

export default function Reviews() {
  const reviews: Review[] = [
    {
      id: 'rev1',
      author: 'Aman Semwal',
      rating: 5,
      text: 'THE OM GYM is easily the best gym in Bhania Wala! The trainers are super friendly and knowledgeable. The strength equipment is outstanding, brand new, and they have multiple benches so you do not have to wait. Highly recommended!',
      role: 'Regular Member',
      date: '2 weeks ago',
    },
    {
      id: 'rev2',
      author: 'Priya Bhandari',
      rating: 5,
      text: 'Amazing facility and top-notch equipment. I joined for their Fat Loss Training Program, and the trainers designed a custom circuit. The gym has proper ventilation and is kept extremely clean. Very comfortable for female members too.',
      role: 'Transformation Club member',
      date: '1 month ago',
    },
    {
      id: 'rev3',
      author: 'Rohan Rawat',
      rating: 4.7,
      text: 'Great environment and highly positive vibe! Extremely spacious workout floor where you can do crossfit and functional warmups easily. Clean locker room and excellent ventilation. Worth every rupee of the membership.',
      role: 'Strength Enthusiast',
      date: '3 weeks ago',
    },
    {
      id: 'rev4',
      author: 'Neha Gairola',
      rating: 5,
      text: 'I love training here. The staff are so helpful and guide you on correct lifting forms. It has a great fitness community feel. Proper sanitation is maintained, and machines are wiped constantly. Outstanding!',
      role: 'Cardio Club Member',
      date: '2 months ago',
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-1/4 top-10 w-96 h-96 bg-amber-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Grid: Scorecard + Reviews Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Google Scorecard */}
          <div className="lg:col-span-4" id="reviews-scorecard">
            <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
              MEMBER SATISFACTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-brand font-black text-white tracking-wide uppercase mb-6 leading-tight">
              WHAT OUR <br />
              <span className="gold-gradient-text">COMMUNITY SAYS</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-sans">
              We pride ourselves on creating an outstanding fitness habitat. Check our collective Google Business rating from local fitness enthusiasts.
            </p>

            {/* Premium Scorecard Container */}
            <div className="bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-xl text-center">
              <h3 className="text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-2 font-mono">
                Google Rating
              </h3>
              <p className="text-white text-6xl font-mono font-black tracking-tight leading-none mb-4">
                4.7
              </p>
              
              {/* Stars rendering */}
              <div className="flex justify-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-zinc-400 text-xs font-semibold uppercase tracking-wider font-sans">
                Based on 131+ Reviews
              </p>
            </div>
          </div>

          {/* Right Block: Reviews Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6" id="reviews-cards-container">
            {reviews.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-zinc-950/60 p-6 rounded-2xl border border-zinc-850 hover:border-amber-500/10 transition-colors flex flex-col justify-between shadow-md"
              >
                <div>
                  {/* Rating star line */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4.5 h-4.5 ${
                            star <= Math.floor(rev.rating)
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-amber-500/30'
                          }`}
                        />
                      ))}
                    </div>
                    <MessageSquare className="w-4 h-4 text-zinc-600" />
                  </div>

                  {/* Review Text */}
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-sans italic">
                    "{rev.text}"
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="border-t border-zinc-900/80 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide font-display">
                      {rev.author}
                    </h4>
                    <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                  <span className="text-zinc-600 text-[10px] font-mono">
                    {rev.date}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
