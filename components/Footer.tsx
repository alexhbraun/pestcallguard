import React from 'react';
import { PestCallGuardLogo } from './PestCallGuardLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
                 <a href="#/" className="flex items-center gap-2">
                  <PestCallGuardLogo className="text-white" />
                </a>
                <p className="mt-6 text-center md:text-left text-gray-400 text-sm max-w-xs leading-relaxed font-medium">
                  24/7 Call Protection for Pest Control Companies. Stop losing revenue to missed calls.
                </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-200">Company</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li><a href="#about" className="hover:text-gold transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
             <div className="text-center md:text-left">
              <h4 className="font-bold text-lg mb-6 uppercase tracking-wider text-gray-200">Legal & Support</h4>
              <ul className="space-y-3 text-gray-400 font-medium">
                <li><a href="#/contact" className="hover:text-gold transition-colors">Contact Us</a></li>
                <li><a href="#/privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#/terms" className="hover:text-gold transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} PestCall Guard. All rights reserved.</p>
          
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>Legal Entity: 60.857.236 ALEXANDER HELMUT BRAUN — Registered in Brazil</p>
            <p>CNPJ: 60.857.236/0001-70</p>
            <p>Commercial Address: Rua Corifeu de Azevedo Marques, Nº 393, Sao Jose dos Campos, SP CEP 12240-780, Brazil</p>
          </div>
          
          <div className="mt-6">
             <a href="mailto:alexander@contact.getgrowsmarter.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                alexander@contact.getgrowsmarter.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};