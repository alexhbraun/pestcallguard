import React from 'react';
import { Truck, Check, Calendar, Laptop } from 'lucide-react';

export const PlumberTargetAudience = () => {
  return (
    <section className="py-24 relative bg-gradient-to-br from-plumber-secondary via-[#0d1a2e] to-plumber-primary text-white overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-plumber-primary/20 rounded-full blur-3xl opacity-40 animate-pulse-slow z-0" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-plumber-accent/10 rounded-full blur-3xl opacity-30 animate-pulse-slow [animation-delay:4s] z-0" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">BUILT FOR PLUMBING CONTRACTORS</h2>
            <p className="text-xl text-gray-200">Designed for plumbing companies running 2–15 trucks who rely on inbound emergency calls and service requests.</p>
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
                  Water heater replacements
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Emergency leak repairs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Drain cleaning & sewer work
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Repiping & renovations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Gas line installations
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Maintenance contracts
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold mb-4">PlumbGuard works alongside your current workflow.</h3>
              <p className="mb-6 text-gray-200">Compatible with ServiceTitan, Housecall Pro, Jobber, or simple calendar booking.</p>
              
              <div className="space-y-3 font-semibold">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  We don't replace your office.
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-success" />
                  We don't complicate your workflow.
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
