import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X, Send, CheckCircle, Dumbbell } from 'lucide-react';

import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Membership from './components/Membership';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [modalForm, setModalForm] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Strength Training',
    message: '',
  });
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openPlanModal = (planName: string) => {
    setSelectedPlan(planName);
    setModalForm((prev) => ({ ...prev, program: planName }));
    setModalSubmitted(false);
    setShowModal(true);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalForm.name || !modalForm.phone) return;

    setModalSubmitting(true);
    // Simulate API registration
    setTimeout(() => {
      setModalSubmitting(false);
      setModalSubmitted(true);
      // Clean modal state
      setModalForm({
        name: '',
        phone: '',
        email: '',
        program: 'Strength Training',
        message: '',
      });
    }, 1200);
  };

  const programsList = [
    'Strength Training',
    'Weight Loss Programs',
    'Muscle Building',
    'Cardio Training',
    'Fat Loss Training',
    'Personal Training',
    'Fitness Assessment',
    'Body Transformation Programs',
    'Book Free Trial Session',
    'Monthly Plan',
    'Quarterly Plan',
    'Annual Plan',
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader-screen" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950"
          >
            {/* Sticky Navigation */}
            <Header onJoinClick={() => openPlanModal('Book Free Trial Session')} />

            {/* Structured Page Sections */}
            <main className="flex-grow">
              {/* 1. Hero Section */}
              <Hero
                onJoinClick={() => openPlanModal('Book Free Trial Session')}
                onTrialClick={() => openPlanModal('Book Free Trial Session')}
              />

              {/* 2. About Us */}
              <AboutUs onLearnMoreClick={() => {
                const element = document.getElementById('why-us');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }} />

              {/* 3. Why Choose Us */}
              <WhyChooseUs />

              {/* 4. Services Section */}
              <Services onServiceClick={(title) => openPlanModal(title)} />

              {/* 5. Facilities Section */}
              <Facilities />

              {/* 6. Membership Plans */}
              <Membership onPlanSelect={(planName) => openPlanModal(planName)} />

              {/* 7. Customer Reviews */}
              <Reviews />

              {/* 8. Gallery Section */}
              <Gallery />

              {/* 9. Contact & Directions */}
              <Contact />
            </main>

            {/* 10. Footer */}
            <Footer />

            {/* Floating Quick WhatsApp Tracker */}
            <FloatingWhatsApp />

            {/* Core Registration Modal Backdrop */}
            <AnimatePresence>
              {showModal && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                  onClick={() => setShowModal(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Trigger */}
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1.5 rounded-full bg-zinc-950/60 border border-zinc-850"
                      aria-label="Close form modal"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    {!modalSubmitted ? (
                      <form onSubmit={handleModalSubmit} className="space-y-5" id="modal-registration-form">
                        
                        {/* Header details */}
                        <div className="flex items-center space-x-3 mb-2 border-b border-zinc-800 pb-3">
                          <div className="bg-amber-500/10 p-2 rounded-lg text-amber-500">
                            <Dumbbell className="w-5 h-5 stroke-[2.5]" />
                          </div>
                          <div>
                            <h3 className="text-white text-lg font-bold font-display uppercase tracking-wide">
                              THE OM GYM induction
                            </h3>
                            <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-semibold font-mono">
                              Bhania Wala Frontdesk Registration
                            </p>
                          </div>
                        </div>

                        {selectedPlan && (
                          <div className="bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl">
                            <span className="text-[10px] text-zinc-400 uppercase tracking-widest block font-mono font-bold">Selected Plan / Interest:</span>
                            <span className="text-amber-500 text-sm font-bold uppercase tracking-wide">{selectedPlan}</span>
                          </div>
                        )}

                        {/* Name */}
                        <div className="flex flex-col">
                          <label htmlFor="modal-name-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                            Full Name *
                          </label>
                          <input
                            id="modal-name-input"
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={modalForm.name}
                            onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                            className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Contact details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <label htmlFor="modal-phone-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                              Phone Number *
                            </label>
                            <input
                              id="modal-phone-input"
                              type="tel"
                              required
                              placeholder="Enter 10-digit number"
                              value={modalForm.phone}
                              onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                            />
                          </div>

                          <div className="flex flex-col">
                            <label htmlFor="modal-email-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                              Email Address
                            </label>
                            <input
                              id="modal-email-input"
                              type="email"
                              placeholder="yourname@gmail.com"
                              value={modalForm.email}
                              onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                              className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Program selector */}
                        <div className="flex flex-col">
                          <label htmlFor="modal-program-select" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                            Change Program of Interest
                          </label>
                          <select
                            id="modal-program-select"
                            value={modalForm.program}
                            onChange={(e) => setModalForm({ ...modalForm, program: e.target.value })}
                            className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
                          >
                            {programsList.map((prog) => (
                              <option key={prog} value={prog}>
                                {prog}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                          <label htmlFor="modal-message-input" className="text-zinc-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
                            Any Specific Goals / Message
                          </label>
                          <textarea
                            id="modal-message-input"
                            rows={3}
                            placeholder="e.g. I am looking to schedule a trial morning slot..."
                            value={modalForm.message}
                            onChange={(e) => setModalForm({ ...modalForm, message: e.target.value })}
                            className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-amber-500 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={modalSubmitting}
                          className="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 font-black py-4 rounded-xl text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:from-amber-600 hover:to-yellow-600 disabled:opacity-50 transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          {modalSubmitting ? (
                            <span className="w-5 h-5 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                          ) : (
                            <>
                              <Send className="w-4 h-4 fill-current" /> Confirm Induction Slot
                            </>
                          )}
                        </button>

                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6 flex flex-col items-center"
                      >
                        <div className="bg-amber-500/10 p-4 rounded-full text-amber-500 border border-amber-500/20 mb-5 animate-bounce">
                          <CheckCircle className="w-12 h-12" />
                        </div>
                        
                        <h4 className="text-white text-xl font-brand font-black uppercase tracking-wider mb-2">
                          SLOT HELD SUCCESSFULLY!
                        </h4>
                        
                        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-sans">
                          Outstanding! Your slot for <strong>THE OM GYM induction</strong> is booked. Our Bhania Wala customer counselor will call you within 2 hours to activate your trial details.
                        </p>

                        <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 w-full mb-6 text-left">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono font-bold block">Club Hours reminder:</span>
                          <span className="text-zinc-300 text-xs font-semibold leading-relaxed font-sans block mt-1">
                            ⏰ Mon - Sun: 05:00 AM - 09:00 PM
                          </span>
                          <span className="text-zinc-300 text-xs font-semibold leading-relaxed font-sans block">
                            📍 Bhania Wala, Uttarakhand, India
                          </span>
                        </div>

                        <button
                          onClick={() => setShowModal(false)}
                          className="w-full bg-zinc-950 hover:bg-zinc-900 text-amber-500 border border-zinc-850 hover:border-amber-500 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}

                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
