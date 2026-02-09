import React from 'react';
import { Truck, Check, Calendar, Laptop } from 'lucide-react';

export const TargetAudience = () => {
  return (
    <section className="py-24 relative bg-gradient-to-br from-secondary via-[#0d2116] to-primary text-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse-slow z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse-slow [animation-delay:4s] z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">BUILT FOR PEST OPERATORS</h2>
            <p className="text-xl text-gray-200">Designed for pest control companies running 3–20 trucks who rely on inbound calls.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6" />
                Whether you handle:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Termite inspections
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Rodent removal
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  General pest control
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  WDO real estate reports
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Recurring quarterly service
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-4">PestAnswer works alongside your current workflow.</h3>
              <p className="mb-6 text-gray-200">Compatible with ServiceTitan, Jobber, Housecall Pro, or simple calendar booking.</p>
              
              <div className="space-y-3 font-semibold">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  We don’t replace your office.
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  We don’t complicate your workflow.
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  We make sure every inbound call gets handled.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
