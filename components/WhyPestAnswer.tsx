
import React from 'react';
import { Check } from 'lucide-react';

export const WhyPestAnswer: React.FC = () => {
  return (
    <section className="bg-[#F8F9F7] py-[100px]">
      <div className="mx-auto max-w-[1100px] px-4">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl sm:text-[42px] font-bold text-[#0F2E1E] uppercase font-heading leading-tight">
            Why Use PestAnswer
          </h2>
          <div className="h-1 w-[60px] bg-accent mt-4"></div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#0F2E1E] mb-3">
              Missed Calls = Lost Jobs
            </h3>
            <div className="h-[2px] w-10 bg-accent mb-4"></div>
            <div className="text-gray-700 space-y-4 flex-grow">
              <p>
                <span className="font-bold">67% of callers</span> hang up if no one answers.
              </p>
              <p>
                <span className="font-bold">85% won’t call back.</span>
              </p>
              <p>
                If someone suspects termites or hears rodents in the attic, they don’t leave voicemails.
              </p>
              <p>
                They call the next company.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#0F2E1E] mb-3">
              After-Hours = High-Intent Leads
            </h3>
            <div className="h-[2px] w-10 bg-accent mb-4"></div>
            <div className="text-gray-700 space-y-4 flex-grow">
              <p>Most inbound pest calls happen:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>After work</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Evenings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Weekends</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>During busy season</span>
                </li>
              </ul>
              <p>
                If your phone goes to voicemail, those jobs are gone.
              </p>
              <p>
                PestAnswer answers 24/7 — even when you’re under a crawlspace or driving between jobs.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <h3 className="text-xl font-bold text-[#0F2E1E] mb-3">
              Speed Wins the Booking
            </h3>
            <div className="h-[2px] w-10 bg-accent mb-4"></div>
            <div className="text-gray-700 space-y-4 flex-grow">
              <p>
                When someone has an urgent pest issue, they book with the first company that responds clearly.
              </p>
              <p>PestAnswer:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Answers instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Qualifies the job</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Captures contact details</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                  <span>Books the inspection or notifies you immediately</span>
                </li>
              </ul>
              <div className="mt-4 font-medium text-[#0F2E1E]">
                <p>No voicemail.</p>
                <p>No missed opportunities.</p>
                <p>No guessing who called.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Reinforcement Bar */}
        <div className="mt-12 mb-12 flex justify-center">
            <div className="bg-[#0F2E1E] text-white rounded-lg py-8 px-8 max-w-[700px] w-full text-center shadow-lg">
                <p className="text-xl sm:text-2xl font-bold">
                    One booked termite job covers the entire month.
                </p>
            </div>
        </div>

        {/* System Specs - Authority */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            
            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#0F2E1E]/5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F2E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0F2E1E]">Enterprise-Grade Infrastructure</h4>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#0F2E1E]/5 flex items-center justify-center">
                <Check className="h-6 w-6 text-[#0F2E1E]" />
              </div>
              <h4 className="font-bold text-[#0F2E1E]">99.9% Uptime Guarantee</h4>
            </div>

            <div className="flex flex-col items-center gap-3">
               <div className="h-12 w-12 rounded-full bg-[#0F2E1E]/5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#0F2E1E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h4 className="font-bold text-[#0F2E1E]">No Robotic IVR Menus</h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
