import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export default function Header({ onJoinClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-amber-500/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#home" className="flex items-center space-x-3 group" id="brand-logo">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-2 rounded-lg flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Dumbbell className="h-6 w-6 text-zinc-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex flex-col">
                <span className="text-white font-brand text-lg md:text-xl font-black tracking-widest leading-none group-hover:text-amber-400 transition-colors">
                  THE OM GYM
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-amber-500 text-sm font-medium uppercase tracking-wider transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Action */}
          <div className="hidden lg:block">
            <button
              onClick={onJoinClick}
              id="header-cta"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-950 font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-amber-500/20 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-btn"
              className="text-zinc-300 hover:text-amber-500 p-2 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Overlay backdrop */}
        <div
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel */}
        <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-zinc-900 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-white font-brand font-extrabold tracking-widest text-lg">
                THE OM GYM
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-amber-500 p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-amber-500 text-sm font-semibold uppercase tracking-widest border-b border-zinc-800 pb-2 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-950 font-bold py-3.5 rounded-xl uppercase tracking-widest text-xs shadow-lg hover:from-amber-600 hover:to-yellow-600 transition-all duration-200"
            >
              Join Club Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
