import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Compass, Send, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Strength Training',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    // Simulate real database receipt
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clean form
      setFormData({
        name: '',
        phone: '',
        email: '',
        program: 'Strength Training',
        message: '',
      });
    }, 1200);
  };

  const programs = [
    'Strength Training',
    'Weight Loss Programs',
    'Muscle Building',
    'Cardio Training',
    'Fat Loss Training',
    'Personal Training',
    'Fitness Assessment',
    'Body Transformation Programs',
    'Book Free Trial Session',
  ];

  return (
    <section id="contact" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Golden graphics */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-display font-bold uppercase tracking-widest text-xs mb-3 block">
            LOCATION & BOOKINGS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-brand font-black text-white tracking-wide uppercase leading-tight">
            GET IN <span className="gold-gradient-text">TOUCH WITH US</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-zinc-400 text-sm mt-4 leading-relaxed font-sans">
            Ready to transform? Submit your registration request, book a free trial, or call our front desk directly. We close at 9:00 PM.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="contact-container">
          
          {/* Left Block: Location, Google Maps & Quick Triggers (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Details Cards */}
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 shadow-xl space-y-5">
              <h3 className="text-white text-base font-bold font-display uppercase tracking-wider border-b border-zinc-900 pb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-500" /> Club Information
              </h3>
              
              {/* Address */}
              <div className="flex items-start space-x-3.5 text-zinc-300">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1 font-mono">Location Address</h4>
                  <p className="text-xs sm:text-sm leading-relaxed font-sans text-zinc-400">
                    Kandal Athoorwala, Bhania Wala, <br />
                    Uttarakhand 248145, India
                  </p>
                  <p className="text-[10px] text-amber-500/70 font-mono mt-1.5 uppercase">
                    Plus Code: 55M5+MC Bhania Wala
                  </p>
                </div>
              </div>

              {/* Instant Action Row */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                {/* Call Action */}
                <a
                  href="tel:+919876543210" // Standard phone launcher
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-amber-500 p-3.5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-amber-500 mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Call Frontdesk</span>
                </a>
                {/* WhatsApp Action */}
                <a
                  href="https://wa.me/919876543210?text=Hi%20The%20Om%20Gym!%20I%20would%20like%20to%20enquire%20about%20membership%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-green-500 p-3.5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 group"
                >
                  <MessageSquare className="w-5 h-5 text-green-500 mb-1.5 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Google Map Box */}
            <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800 shadow-xl flex-grow flex flex-col justify-between overflow-hidden">
              <div className="relative rounded-xl overflow-hidden h-[240px] border border-zinc-900">
                {/* Real Google Search Iframe Embed */}
                <iframe
                  title="The Om Gym Fitness Club Location Map"
                  src="https://maps.google.com/maps?q=THE%20OM%20GYM%20FITNESS%20CLUB%20Kandal%20Athoorwala%20Bhania%20Wala%20Uttarakhand%20248145&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full filter invert-[90%] hue-rotate-180 brightness-[85%] contrast-[110%] border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Get Directions Anchor */}
              <a
                href="https://www.google.com/maps/dir//THE+OM+GYM+FITNESS+CLUB+Kandal+Athoorwala+Bhania+Wala+Uttarakhand+248145"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-amber-500 text-center py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Compass className="w-4 h-4 text-amber-500" /> Open Directions In Google Maps
              </a>
            </div>

          </div>

          {/* Right Block: Contact / Enquiry Form (col-span-7) */}
          <div className="lg:col-span-7 bg-zinc-950 p-8 rounded-3xl border border-zinc-800 shadow-xl flex flex-col justify-center relative overflow-hidden" id="contact-form-container">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="border-b border-zinc-900 pb-4">
                    <h3 className="text-white text-lg font-bold font-display uppercase tracking-wider mb-1">
                      Quick Registration Form
                    </h3>
                    <p className="text-zinc-500 text-xs">
                      Fill out your training details. Our counselor will lock down your slots.
                    </p>
                  </div>

                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Full Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Contact Row (Phone + Email) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label htmlFor="phone-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Phone Number *
                      </label>
                      <input
                        id="phone-input"
                        type="tel"
                        required
                        placeholder="Enter 10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Program Select */}
                  <div className="flex flex-col">
                    <label htmlFor="program-select" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Selected Program of Interest
                    </label>
                    <select
                      id="program-select"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3.5 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {programs.map((prog) => (
                        <option key={prog} value={prog} className="bg-zinc-950 text-zinc-200">
                          {prog}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col">
                    <label htmlFor="message-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                      Personal Goal / Message
                    </label>
                    <textarea
                      id="message-input"
                      rows={3}
                      placeholder="e.g. I want to build muscle / lose weight..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 font-black py-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:from-amber-600 hover:to-yellow-600 shadow-md hover:shadow-lg disabled:opacity-50 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-current" /> Submit Registration Request
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 flex flex-col items-center"
                >
                  <div className="bg-amber-500/10 p-5 rounded-full border border-amber-500/30 text-amber-500 mb-6 animate-bounce">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  
                  <h3 className="text-white text-2xl font-brand font-black uppercase tracking-wider mb-3">
                    REGISTRATION CONFIRMED!
                  </h3>
                  
                  <p className="text-zinc-300 text-sm max-w-md leading-relaxed mb-6 font-sans">
                    Thank you! Your spot is tentatively registered. Our executive at the <strong>Bhania Wala Frontdesk</strong> will reach you within 2 hours to confirm your induction schedule.
                  </p>

                  <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 max-w-sm mb-8">
                    <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                      ⏰ <strong>Timing Reminder:</strong> <br />
                      We are open from 05:00 AM to 09:00 PM. Feel free to carry your sports shoes, training towel, and dynamic spirit!
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-zinc-900 hover:bg-zinc-800 text-amber-500 border border-zinc-800 hover:border-amber-500 font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
