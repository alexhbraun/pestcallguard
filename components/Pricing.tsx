import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* 1. Headline & Subheadline */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-secondary mb-6 tracking-tight uppercase leading-none">
            NEVER MISS ANOTHER <span className="text-nowrap">PEST CONTROL CALL</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-medium font-medium max-w-2xl mx-auto leading-relaxed">
            Protect your inbound revenue 24/7 — without hiring another office employee.
          </p>
        </div>

        {/* 2. Pricing Card */}
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden relative transform hover:-translate-y-1 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-3 bg-primary"></div>
          
          <div className="p-10 md:p-12 text-center">
            
            {/* Price Block */}
            <div className="mb-10">
              <div className="flex items-end justify-center gap-1 leading-none mb-4">
                <span className="text-6xl md:text-7xl font-extrabold text-accent tracking-tighter">$397</span>
                <span className="text-xl text-neutral-medium font-bold pb-2">/ month</span>
              </div>
              <p className="text-secondary font-bold text-lg mb-2">
                Less than the profit from one termite job.
              </p>
              <p className="text-sm text-neutral-medium font-medium">
                No contracts. Cancel anytime.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-5 text-left mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-secondary font-bold text-lg">24/7 Live Call Answering <span className="text-neutral-medium font-normal text-base">(Never voicemail)</span></span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-secondary font-bold text-lg">Inspection Booking While You’re On Jobs</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-secondary font-bold text-lg">Instant Lead Alerts To Your Phone</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-1 rounded-full flex-shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
                <span className="text-secondary font-bold text-lg">Full Call Recordings & Transcripts</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/LaSQ8GSkaQP0OHLZ31VC" 
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                  <button className="w-full bg-primary hover:bg-green-900 text-white font-extrabold text-xl px-8 py-5 rounded-lg shadow-lg transition-all uppercase tracking-wide border-b-4 border-green-900 active:translate-y-1 active:border-b-0">
                    PROTECT MY CALLS
                  </button>
              </a>
              <p className="text-center text-sm text-neutral-medium mt-4 font-bold flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Live in 24 hours. No tech headaches.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
