import React from 'react';
import { DollarSign, TrendingDown } from 'lucide-react';

export const CostSection = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12">THE COST</h2>
          
          <div className="bg-white rounded-lg shadow-sm mb-12 border-l-8 border-accent">
            <div className="p-10 md:p-14">
                <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6 flex flex-col md:flex-row items-center justify-center gap-4 uppercase">
                <div className="bg-green-100 p-3 rounded-full text-primary">
                     <TrendingDown className="w-8 h-8" />
                </div>
                One Missed Termite Call Can Cost You <span className="text-accent text-5xl md:text-6xl block mt-2 md:mt-0">$2,000+</span>
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto mt-10 border-t border-gray-100 pt-10">
                <div className="bg-neutral-light p-6 rounded-lg">
                    <p className="font-bold text-secondary mb-2 text-lg">The Call:</p>
                    <p className="text-neutral-medium">Homeowner sees mud tubes. Needs inspection ASAP.</p>
                </div>
                <div className="bg-neutral-light p-6 rounded-lg border border-gray-200">
                    <p className="font-bold text-secondary mb-2 text-lg">The Result:</p>
                    <p className="text-secondary font-bold">Voicemail. They hang up. Next guy gets the $2k job.</p>
                </div>
                </div>
                
                <p className="text-xl text-secondary mt-10 leading-relaxed font-bold">
                If you lose just one strong inspection per month because nobody answered, that’s more than the monthly cost of PestCall Guard.
                </p>
            </div>
             <div className="bg-secondary text-accent py-4 px-8 font-bold text-lg uppercase tracking-wider">
                We don’t sell marketing. We protect revenue.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
