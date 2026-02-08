import React from 'react';
import { Check } from 'lucide-react';

export const PlumberPricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-plumber-secondary mb-4 uppercase tracking-tight">
              NEVER MISS ANOTHER PLUMBING CALL
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Protect your inbound revenue 24/7 — without hiring another dispatcher.
            </p>
          </div>

          {/* Price Block */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-10 mb-12 text-center">
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-black text-yellow-500">$397</span>
                <span className="text-2xl text-neutral-medium font-medium">/ month</span>
              </div>
              <p className="text-lg text-neutral-medium mt-4 font-bold">
                Less than the profit from one water heater replacement.
              </p>
              <p className="text-sm text-neutral-medium mt-2">
                No contracts. Cancel anytime.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 text-left max-w-xl mx-auto mb-10">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-plumber-secondary">24/7 Live Call Answering</p>
                  <p className="text-sm text-neutral-medium">Never voicemail</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-plumber-secondary">Emergency Dispatch & Appointment Booking</p>
                  <p className="text-sm text-neutral-medium">While you're on jobs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-plumber-secondary">Instant Lead Alerts To Your Phone</p>
                  <p className="text-sm text-neutral-medium">Real-time notifications</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-plumber-secondary">Full Call Recordings & Transcripts</p>
                  <p className="text-sm text-neutral-medium">Complete transparency</p>
                </div>
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
                  <button className="w-full bg-plumber-primary hover:bg-blue-900 text-white font-extrabold text-xl px-8 py-5 rounded-lg shadow-lg transition-all uppercase tracking-wide border-b-4 border-blue-900 active:translate-y-1 active:border-b-0">
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
