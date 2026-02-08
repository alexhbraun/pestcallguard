import React, { useState } from 'react';
import { PlumbGuardLogo } from './PlumbGuardLogo';
import { Menu, X } from 'lucide-react';

export const PlumberHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 py-4">
            <a href="#/plumber" className="flex items-center gap-2" onClick={closeMenu}>
              <PlumbGuardLogo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-6">
              <a href="#/plumber" className="text-plumber-secondary hover:text-plumber-primary font-bold uppercase tracking-wide text-sm transition-colors">Home</a>
              <a href="#features" className="text-plumber-secondary hover:text-plumber-primary font-bold uppercase tracking-wide text-sm transition-colors">How It Works</a>
              <a href="#pricing" className="text-plumber-secondary hover:text-plumber-primary font-bold uppercase tracking-wide text-sm transition-colors">Pricing</a>
              <a href="#/contact" className="text-plumber-secondary hover:text-plumber-primary font-bold uppercase tracking-wide text-sm transition-colors">Contact</a>
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
             <a
              href="#booking-section"
              className="ml-4 px-6 py-3 text-sm font-bold text-white bg-plumber-primary rounded-lg shadow-sm hover:bg-blue-900 transition-all duration-300 uppercase tracking-wide"
            >
              Book Setup Call
            </a>
          </div>

          {/* Mobile Menu Button & CTA */}
           <div className="md:hidden flex items-center gap-4">
              <a
                href="#booking-section"
                onClick={closeMenu}
                className="px-4 py-2 text-sm font-bold text-white bg-plumber-primary rounded-lg shadow-sm hover:bg-blue-900 transition-colors duration-200 uppercase"
              >
                Book Call
              </a>
              <button 
                onClick={toggleMenu}
                className="text-gray-600 hover:text-plumber-accent focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-xl z-40 animate-fade-in-up origin-top">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            <a href="#/plumber" onClick={closeMenu} className="text-lg font-medium text-gray-700 hover:text-plumber-accent block border-b border-gray-100 pb-2">Home</a>
            <a href="#/plumber-demo" onClick={closeMenu} className="text-lg font-medium text-gray-700 hover:text-plumber-accent block border-b border-gray-100 pb-2">Demo</a>
            <a href="#features" onClick={closeMenu} className="text-lg font-medium text-gray-700 hover:text-plumber-accent block border-b border-gray-100 pb-2">Features</a>
            <a href="#pricing" onClick={closeMenu} className="text-lg font-medium text-gray-700 hover:text-plumber-accent block border-b border-gray-100 pb-2">Pricing</a>
            <a href="#/contact" onClick={closeMenu} className="text-lg font-medium text-gray-700 hover:text-plumber-accent block">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};
