import { Dumbbell, Instagram, Facebook, Youtube, MessageSquare, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Facilities', href: '#facilities' },
    { name: 'Membership Plans', href: '#pricing' },
    { name: 'Member Reviews', href: '#reviews' },
    { name: 'Gym Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const services = [
    { name: 'Strength Training', href: '#services' },
    { name: 'Weight Loss Programs', href: '#services' },
    { name: 'Muscle Building', href: '#services' },
    { name: 'Cardio Training', href: '#services' },
    { name: 'Fat Loss Training', href: '#services' },
    { name: 'Personal Training', href: '#services' },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 relative overflow-hidden" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand details (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-3 group w-fit">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-2.5 rounded-xl flex items-center justify-center shadow-md">
                <Dumbbell className="h-6 w-6 text-zinc-950 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-brand text-xl font-black tracking-widest leading-none">
                  THE OM GYM
                </span>
              </div>
            </a>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
              The premium landmark of strength, weight loss, and professional transformation programs in Bhania Wala, Uttarakhand. Let's sculpt your dynamic self.
            </p>

            {/* Socials Connection */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-400 p-3 rounded-full border border-zinc-800 transition-all duration-300"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-400 p-3 rounded-full border border-zinc-800 transition-all duration-300"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-400 p-3 rounded-full border border-zinc-800 transition-all duration-300"
                aria-label="YouTube Link"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-amber-500 pl-3 mb-2 font-mono">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-amber-500 text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services list (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-amber-500 pl-3 mb-2 font-mono">
              Our Specializations
            </h4>
            <ul className="space-y-3">
              {services.map((serv) => (
                <li key={serv.name}>
                  <a
                    href={serv.href}
                    className="text-zinc-400 hover:text-amber-500 text-xs font-medium transition-colors duration-200 font-sans"
                  >
                    {serv.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Timings & Address Info (col-span-3) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-amber-500 pl-3 mb-2 font-mono">
              Get In Touch
            </h4>
            <ul className="space-y-4 text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
              
              {/* Location */}
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>
                  Kandal Athoorwala, Bhania Wala, Uttarakhand 248145
                </span>
              </li>

              {/* Call */}
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-amber-500" />
                <a href="tel:+919876543210" className="hover:text-amber-500 transition-colors">
                  +91 98765 43210
                </a>
              </li>

              {/* Open Timings */}
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4.5 h-4.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily Timing Slots</p>
                  <p className="text-xs text-zinc-400 mt-0.5">05:00 AM - 09:00 PM</p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Separator line */}
        <div className="w-full h-px bg-zinc-900 my-8" />

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            © {currentYear} THE OM GYM FITNESS CLUB. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            DESIGNED & SCULPTED IN UTTARAKHAND
          </p>
        </div>

      </div>
    </footer>
  );
}
