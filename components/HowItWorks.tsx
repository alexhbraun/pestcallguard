import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-12 text-center">HOW IT WORKS</h2>
          
          <div className="bg-neutral-light rounded-xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-secondary mb-6">When your techs are busy and you can’t answer:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-neutral-dark">We answer in your company name</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-neutral-dark">Ask what pest issue they’re dealing with</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-neutral-dark">Capture name, phone, and property address</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-neutral-dark">Identify urgency (termite, rodent, emergency, general pest)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-neutral-dark">Book the inspection or notify you instantly</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-px md:bg-gray-200"></div>
            
            <div className="flex-1 flex flex-col justify-center space-y-6">
              <div className="flex items-center gap-3 text-lg font-semibold text-secondary">
                <XCircle className="w-6 h-6 text-error" />
                No voicemail.
              </div>
              <div className="flex items-center gap-3 text-lg font-semibold text-secondary">
                <XCircle className="w-6 h-6 text-error" />
                No delayed callbacks.
              </div>
              <div className="flex items-center gap-3 text-lg font-semibold text-secondary">
                <XCircle className="w-6 h-6 text-error" />
                No lost inspections.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
