
import React from 'react';
import { Check, X, Clock, DollarSign, BatteryCharging, Zap } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">
            The Smartest Hire You'll Ever Make
          </h2>
          <p className="mt-4 text-lg text-neutral-medium">
            See how an AI Agent stacks up against a traditional receptionist.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-premium-lg">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Header Column (Hidden on mobile, visible on MD) */}
            <div className="hidden md:flex flex-col bg-gray-50 border-r border-gray-200">
               <div className="p-6 h-24 flex items-center">
                 <span className="text-lg font-bold text-primary">Comparison</span>
               </div>
               <div className="flex-1">
                 <div className="p-4 border-t border-gray-200 h-20 flex items-center text-gray-600 font-medium"><DollarSign className="w-5 h-5 mr-3 text-gray-400"/> Monthly Cost</div>
                 <div className="p-4 border-t border-gray-200 h-20 flex items-center text-gray-600 font-medium"><Clock className="w-5 h-5 mr-3 text-gray-400"/> Availability</div>
                 <div className="p-4 border-t border-gray-200 h-20 flex items-center text-gray-600 font-medium"><BatteryCharging className="w-5 h-5 mr-3 text-gray-400"/> Sick Days & Breaks</div>
                 <div className="p-4 border-t border-gray-200 h-20 flex items-center text-gray-600 font-medium"><Zap className="w-5 h-5 mr-3 text-gray-400"/> Concurrent Calls</div>
                 <div className="p-4 border-t border-gray-200 h-20 flex items-center text-gray-600 font-medium">Training Required</div>
               </div>
            </div>

            {/* Human Receptionist Column */}
            <div className="flex flex-col bg-white md:border-r border-gray-200">
               <div className="p-6 h-24 flex flex-col justify-center border-b border-gray-100 md:border-none">
                 <h3 className="text-xl font-bold text-gray-400">Human Receptionist</h3>
                 <p className="text-xs text-gray-400">The Traditional Way</p>
               </div>
               <div className="flex-1">
                 {/* Mobile Label included in rows */}
                 <div className="p-4 border-t border-gray-100 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-gray-500">Monthly Cost</span>
                    <span className="text-xl font-bold text-red-500">$3,000+</span>
                 </div>
                 <div className="p-4 border-t border-gray-100 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-gray-500">Availability</span>
                    <span className="text-gray-600">40 Hours / Week</span>
                 </div>
                 <div className="p-4 border-t border-gray-100 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-gray-500">Sick Days</span>
                    <span className="flex items-center text-gray-600"><Check className="w-5 h-5 text-red-400 mr-2"/> Yes (Frequent)</span>
                 </div>
                 <div className="p-4 border-t border-gray-100 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-gray-500">Concurrent Calls</span>
                    <span className="text-gray-600">1 at a time</span>
                 </div>
                 <div className="p-4 border-t border-gray-100 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-gray-500">Training</span>
                    <span className="text-gray-600">Weeks to Months</span>
                 </div>
               </div>
            </div>

            {/* AI Agent Column */}
            <div className="flex flex-col bg-soft-light-navy relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
               <div className="p-6 h-24 flex flex-col justify-center bg-white/50">
                 <h3 className="text-xl font-bold text-accent">GrowSmarter AI</h3>
                 <p className="text-xs text-primary font-semibold">The Modern Way</p>
               </div>
               <div className="flex-1">
                 <div className="p-4 border-t border-white/50 h-auto md:h-20 flex items-center justify-between md:justify-start bg-accent/5">
                    <span className="md:hidden font-medium text-primary">Monthly Cost</span>
                    <span className="text-2xl font-bold text-green-600">$497</span>
                 </div>
                 <div className="p-4 border-t border-white/50 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-primary">Availability</span>
                    <span className="font-semibold text-primary">24/7/365</span>
                 </div>
                 <div className="p-4 border-t border-white/50 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-primary">Sick Days</span>
                    <span className="flex items-center font-semibold text-primary"><X className="w-5 h-5 text-green-500 mr-2"/> None (Never)</span>
                 </div>
                 <div className="p-4 border-t border-white/50 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-primary">Concurrent Calls</span>
                    <span className="font-semibold text-primary">Unlimited</span>
                 </div>
                 <div className="p-4 border-t border-white/50 h-auto md:h-20 flex items-center justify-between md:justify-start">
                    <span className="md:hidden font-medium text-primary">Training</span>
                    <span className="font-semibold text-primary">Instant</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
