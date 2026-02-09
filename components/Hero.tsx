import React from 'react';
import { Phone, Play } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-secondary text-white overflow-hidden border-b-4 border-accent">
      {/* Background with overlay - Charcoal Base */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img 
          src="/hero-bg.jpg" 
          alt="Pest Control Technician in Crawlspace" 
          className="w-full h-full object-cover object-center opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/75 to-secondary/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 lg:py-36 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-8 leading-tight uppercase tracking-tight">
            Stop Losing Pest Control Jobs to <span className="text-accent">Missed Calls</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            PestAnswer answers every inbound call 24/7, captures inspection requests, and makes sure no termite, rodent, or emergency job goes to the next company on Google.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#features"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-green-900 text-white font-bold rounded-lg shadow-lg transition-all text-lg uppercase tracking-wide border-2 border-primary"
            >
              See How It Works
            </a>
            
            <a 
              href="#/demo2"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-secondary font-bold rounded-lg transition-all text-lg flex items-center justify-center gap-2 uppercase tracking-wide"
            >
              <div className="bg-accent/10 p-1 rounded-full">
                 <Play className="w-4 h-4 fill-current" />
              </div>
              Test Live Demo
            </a>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale">
          </div>
        </div>
      </div>
    </section>
  );
};
