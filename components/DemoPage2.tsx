
import React from 'react';
import { Phone, ArrowRight, Activity, Mic, Calendar, UserCheck, MessageSquare } from 'lucide-react';
import { Pricing } from './Pricing';

export const DemoPage2: React.FC = () => {
    // Helper to parse URL params from hash
    const getUrlParam = (key: string) => {
        try {
            const hash = window.location.hash;
            if (hash.includes('?')) {
                const query = hash.split('?')[1];
                const params = new URLSearchParams(query);
                const val = params.get(key);
                if (val) return decodeURIComponent(val);
            }
        } catch (e) {
            console.error("Error parsing URL param:", e);
        }
        return null;
    };

    // 1. Get Company Name (Default: [Your Business Name])
    const businessName = getUrlParam('company') || getUrlParam('business') || "[Your Business Name]";

    // 2. Get Subtitle (Default: Personalized Demo)
    const subtitle = getUrlParam('subtitle') || "Personalized Demo";

    // 3. Get Ad ID for Botmockups (Default: Provided ID)
    const adId = getUrlParam('adid') || "1767875484656x241277494768435200";

    // 4. Get Phone Number (Default: 833-405-1548)
    const phoneNumber = getUrlParam('phone') || "833-405-1548";

    const handlePhoneClick = () => {
        alert(`DEMO MODE: Calling ${phoneNumber}...`);
    };

    return (
    <div className="bg-white min-h-screen font-sans text-secondary pb-0">
      
      {/* SECTION 1: TITLE HEADER (INDUSTRIAL GRADIENT BACKGROUND) */}
      <section className="relative bg-gradient-to-br from-secondary via-[#0d2116] to-primary text-white overflow-hidden py-20 lg:py-24">
         
         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse-slow z-0" aria-hidden="true" />
         <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl opacity-30 animate-pulse-slow [animation-delay:4s] z-0" aria-hidden="true" />

         <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-heading text-white uppercase drop-shadow-xl">
                Never miss a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">service call</span> again
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-8">
                {subtitle} for {businessName}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-bold tracking-wide">
                Here’s exactly how your missed calls would be handled — 24/7.
            </p>
         </div>

         {/* Decorative Wave Separator */}
         <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
      </section>

      {/* SECTION 2: AI WEB BOOKING (WHITE BACKGROUND) */}
      <section className="bg-white py-20 lg:py-24 overflow-hidden border-b border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Text Content & Features */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-secondary leading-[1.1] uppercase font-heading mb-6">
                        Website Visitors <span className="text-primary">→</span> Booked Pest Inspections
                    </h2>
                    
                    <div className="mt-8 mb-10 flex justify-center lg:justify-start">
                         <div className="group relative inline-flex items-center gap-3 px-6 py-4 bg-neutral-light border-l-4 border-accent rounded-r-lg shadow-sm">
                             <div className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                             </div>
                             
                             <div className="bg-white p-2 rounded-full border border-gray-200">
                                <MessageSquare className="w-6 h-6 text-primary flex-shrink-0" />
                             </div>
                             
                             <p className="text-lg font-bold text-secondary max-w-xs sm:max-w-none text-left">
                                Click the chat icon on the phone to test it.
                             </p>
                             
                             <ArrowRight className="hidden lg:block w-6 h-6 text-accent animate-pulse ml-2 flex-shrink-0" />
                         </div>
                    </div>

                    <div className="grid gap-6 text-left">
                         <div className="flex items-start gap-4 p-6 rounded-lg bg-neutral-light border-l-4 border-primary">
                             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary flex-shrink-0 border border-gray-200">
                                 <Activity size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-secondary text-lg">Under 2 Seconds</h4>
                                 <p className="text-sm text-neutral-medium mt-1 font-medium">Engage every visitor in under 2 seconds.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4 p-6 rounded-lg bg-neutral-light border-l-4 border-accent">
                             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-accent flex-shrink-0 border border-gray-200">
                                 <Calendar size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-secondary text-lg">Book Inspections</h4>
                                 <p className="text-sm text-neutral-medium mt-1 font-medium">Qualify termite, rodent, or general pest issues.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4 p-6 rounded-lg bg-neutral-light border-l-4 border-primary">
                             <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-primary flex-shrink-0 border border-gray-200">
                                 <UserCheck size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-secondary text-lg">Convert Traffic</h4>
                                 <p className="text-sm text-neutral-medium mt-1 font-medium">Convert traffic into scheduled inspections.</p>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Right: Floating Phone Mockup */}
                <div className="order-1 lg:order-2 relative w-full flex justify-center">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 rounded-[100%] blur-xl pointer-events-none"></div>
                     <div className="animate-float relative z-20">
                        <div className="origin-top transform scale-90 sm:scale-100 transition-transform duration-300">
                            <div style={{ width: '374px', height: '761px' }} className="relative mx-auto drop-shadow-2xl">
                                 <iframe 
                                    src={`https://app.botmockups.com/embed?adid=${adId}&mobileid=1`} 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 'none' }} 
                                    title="Botmockups"
                                ></iframe>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: 24/7 PEST CALL PROTECTION (LIGHT GRAY BACKGROUND) */}
      <section className="bg-neutral-light py-20 lg:py-28 relative border-t border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
               <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-secondary leading-[1.1] mb-6 uppercase font-heading">
                24/7 Pest Call <span className="text-primary">Protection</span>
               </h2>
               <p className="text-xl text-neutral-medium leading-relaxed mb-4 font-bold">
                Personalized Demo for <strong className="text-secondary">{businessName}</strong>
               </p>
               <p className="text-lg text-neutral-medium leading-relaxed mb-8">
                Hear how our system handles scheduling, questions, and emergencies just like your best office manager.
               </p>
               
               <div className="mt-8 space-y-4">
                   <button 
                    onClick={handlePhoneClick}
                    className="w-full sm:w-auto bg-primary text-white font-bold text-xl px-8 py-5 rounded-lg shadow-lg hover:bg-green-900 hover:-translate-y-1 transition-all flex items-center justify-center gap-4 border-b-4 border-green-900"
                   >
                     <Phone fill="currentColor" size={24} />
                     Call {phoneNumber}
                   </button>
                   <p className="text-sm text-neutral-medium font-medium flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                        Call this number and hear how PestAnswer would answer your calls. This is a live demo line.
                   </p>
               </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center">
                {/* VISUAL CALL BLOCK REPLACEMENT */}
                <div className="relative w-full max-w-md aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-2xl group border-4 border-gray-800 flex flex-col items-center justify-center">
                    <iframe 
                        src="https://share.descript.com/embed/O85i0ZKmOCM" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                        title="Descript Video"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING STRIP (WHITE) */}
      <Pricing />

    </div>
  );
};
