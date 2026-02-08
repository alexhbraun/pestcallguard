import React from 'react';
import { Phone } from 'lucide-react';

export const PlumberFinalCTA = () => {
  return (
    <section className="py-24 relative bg-gradient-to-br from-plumber-secondary via-[#0d1a2e] to-plumber-primary text-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-plumber-primary/20 rounded-full blur-3xl opacity-40 animate-pulse-slow z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-plumber-accent/10 rounded-full blur-3xl opacity-30 animate-pulse-slow [animation-delay:4s] z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-8 tracking-tight uppercase drop-shadow-lg">
          Ready to Stop Losing Plumbing Calls?
        </h2>
        
        <a 
          href="https://api.leadconnectorhq.com/widget/booking/LaSQ8GSkaQP0OHLZ31VC" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
        >
            <button className="px-10 py-5 bg-plumber-accent hover:bg-yellow-400 text-plumber-secondary font-extrabold rounded-lg shadow-2xl transition-all transform hover:-translate-y-1 text-xl flex items-center justify-center gap-3 mx-auto border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1">
            <Phone className="w-6 h-6 fill-current" />
            Book a 15-Minute Setup Call
            </button>
        </a>
      </div>
    </section>
  );
};
