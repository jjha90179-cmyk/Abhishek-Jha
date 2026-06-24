import { Check, Flame } from 'lucide-react';
import { motion } from 'motion/react';
import { PricingPlan } from '../types';

interface MembershipProps {
  onPlanSelect: (planName: string) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
  const plans: PricingPlan[] = [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '₹1,500',
      period: 'Month',
      features: [
        'Full Strength Gym Access',
        'Standard Cardio Zone Access',
        'Locker Room Access',
        'Proper Ventilation Floors',
        'Free General Trainer Guidance',
        '1 Clean Customized Workout Chart',
      ],
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      price: '₹4,000',
      period: '3 Months',
      features: [
        'Full Strength Gym Access',
        'Unlimited Cardio Zone Access',
        'Locker Room Access',
        'Professional Gym Assessments',
        'Personal Trainer Guidance (2 Sessions)',
        '3 Custom Gym Workout Charts',
        'Save ₹500 over Monthly rate',
      ],
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      price: '₹12,000',
      period: 'Year',
      features: [
        'Full Strength & Cardio Access',
        'VIP Locker Lockers',
        'Unlimited Advanced Cardio Slots',
        'Bi-Monthly Gym Assessments',
        'Personal Training Guidance (8 Sessions)',
        'Unlimited Customized Workout Charts',
        'Priority Coach Consultations',
        'Best Value: Saves ₹6,000/Year!',
      ],
      isPopular: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.01] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            AFFORDABLE MEMBERSHIP PLANS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            SELECT YOUR <span className="gold-gradient-text">FITNESS JOURNEY</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            No sign-up fees or hidden costs. Choose a premium plan that matches your training stamina, consistency, and fitness transformation milestones.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto" id="pricing-cards-grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-zinc-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 md:scale-105 z-10'
                  : 'bg-zinc-900/60 border border-zinc-800/80 shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-zinc-950 stroke-[2.5]" /> Best Value
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-zinc-400 font-display font-bold uppercase tracking-wider text-xs mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-white text-4xl sm:text-5xl font-mono font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider ml-1">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-zinc-800/60 my-6" />

                {/* Features Checklist */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-zinc-300 text-xs font-medium font-sans">
                      <div className="bg-amber-500/10 p-0.5 rounded-full flex-shrink-0 mt-0.5 text-amber-500">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs shadow-md transition-all duration-300 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 hover:from-amber-600 hover:to-yellow-600 shadow-amber-500/15 hover:shadow-lg'
                      : 'bg-zinc-800 text-white hover:bg-zinc-700 hover:text-amber-500'
                  }`}
                >
                  Join Under This Plan
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
