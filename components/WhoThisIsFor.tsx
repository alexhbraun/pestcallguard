import React from 'react';
import { Check, X } from 'lucide-react';

export const WhoThisIsFor = () => {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12 text-center">WHO THIS IS FOR</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* THIS IS FOR */}
            <div className="bg-neutral-light rounded-xl p-8 border-l-4 border-success shadow-sm">
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <div className="bg-success text-white p-1 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                This IS for pest control companies that:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-dark font-medium">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  Rely heavily on inbound calls
                </li>
                <li className="flex items-start gap-3 text-neutral-dark font-medium">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  Run multiple trucks
                </li>
                <li className="flex items-start gap-3 text-neutral-dark font-medium">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  Miss calls during jobs
                </li>
                <li className="flex items-start gap-3 text-neutral-dark font-medium">
                  <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  Don’t want to hire another office employee
                </li>
              </ul>
            </div>
            
            {/* THIS IS NOT FOR */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 border-l-4 border-l-error shadow-sm opacity-90">
              <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
                <div className="bg-error text-white p-1 rounded-full">
                  <X className="w-4 h-4" />
                </div>
                This is NOT for:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-neutral-medium">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  Large enterprise franchises with call centers
                </li>
                <li className="flex items-start gap-3 text-neutral-medium">
                  <X className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  Companies that already have 24/7 live answering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
