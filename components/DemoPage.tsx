
import React from 'react';
import { Phone, ArrowRight, Activity, Mic, Calendar, UserCheck, MessageSquare } from 'lucide-react';

export const DemoPage: React.FC = () => {
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

  // 3. Get Tracking ID (Default: None)
  const idid = getUrlParam('idid') || "";
  const mockupId = "GAMhvSBdOqhVZml9PF8s";

  // 4. Get Phone Number (Default: 833-405-1548)
  const phoneNumber = getUrlParam('phone') || "833-405-1548";

  const handlePhoneClick = () => {
     alert(`DEMO MODE: Calling ${phoneNumber}...`);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#1F1F1F] pb-0">
      
      {/* SECTION 1: TITLE HEADER (DARK PREMIUM BACKGROUND) */}
      <section className="relative bg-gradient-to-br from-[#00152e] via-[#002B5C] to-[#001226] text-white overflow-hidden py-20 lg:py-24">
         {/* Background decorative elements */}
         <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50 animate-pulse-slow z-0" aria-hidden="true" />
         <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse-slow [animation-delay:4s] z-0" aria-hidden="true" />
         
         {/* Subtle Noise Texture */}
         <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

         <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 drop-shadow-2xl font-heading text-white">
                Never miss a call or <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">lead</span> again!
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-200">
                {subtitle} for {businessName}
            </h2>
         </div>
         
         {/* Decorative Wave Separator */}
         <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
            </svg>
        </div>
      </section>

      {/* SECTION 2: AI CHAT EMPLOYEE (WHITE BACKGROUND) */}
      <section className="bg-white py-20 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left: Text Content & Features */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
                        AI Chat <span className="text-secondary">Employee</span>
                    </h2>
                    
                    {/* ENHANCED CTA for clarity */}
                    <div className="mt-8 mb-10 flex justify-center lg:justify-start">
                         <div className="group relative inline-flex items-center gap-3 px-5 py-4 bg-white border-2 border-accent/10 rounded-xl shadow-premium hover:shadow-premium-hover hover:border-accent/30 transition-all duration-300">
                             {/* Ping Animation to draw attention */}
                             <div className="absolute -top-1.5 -right-1.5 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                             </div>
                             
                             <div className="bg-accent/10 p-2 rounded-lg">
                                <MessageSquare className="w-6 h-6 text-accent flex-shrink-0" />
                             </div>
                             
                             <p className="text-lg font-bold text-gray-700 max-w-xs sm:max-w-none text-left">
                                Click the chat icon on the phone demo to start chatting
                             </p>
                             
                             {/* Arrow pointing to phone on desktop */}
                             <ArrowRight className="hidden lg:block w-6 h-6 text-accent animate-pulse ml-2 flex-shrink-0" />
                         </div>
                    </div>

                    <div className="grid gap-6 text-left">
                         <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                             <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                 <Activity size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-gray-900">Instant Response</h4>
                                 <p className="text-sm text-gray-500 mt-1">Engages visitors in under 2 seconds, 24/7/365.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                             <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                 <Calendar size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-gray-900">Book More Jobs</h4>
                                 <p className="text-sm text-gray-500 mt-1">Converts traffic into scheduled appointments automatically.</p>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Right: Floating Phone Mockup */}
                <div className="order-1 lg:order-2 relative w-full flex justify-center perspective-1000">
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/20 rounded-[100%] blur-xl pointer-events-none"></div>
                     
                     {/* 
                        Use a nested structure for scaling to avoid JIT issues.
                        Outer div handles the float animation and centering.
                        Middle div handles the responsive scaling.
                        Inner div sets the fixed dimensions for the iframe.
                     */}
                     <div className="animate-float relative z-20">
                        <div className="origin-top transform scale-90 sm:scale-100 transition-transform duration-300">
                            {/* Removed rounded/overflow/bg-white constraints so the iframe's internal phone graphic determines the shape */}
                             <div style={{ width: '100%', maxWidth: '400px', height: '700px' }} className="relative mx-auto drop-shadow-2xl">
                                  <iframe 
                                     src={`https://mockupflow-gules.vercel.app/m/${mockupId}${idid ? `?idid=${idid}` : ''}`} 
                                     width="100%" 
                                     height="100%" 
                                     style={{ border: 'none', borderRadius: '12px', overflow: 'hidden' }} 
                                     title="MockupFlow"
                                     frameBorder="0"
                                 ></iframe>
                             </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: AI VOICE EMPLOYEE */}
      <section className="bg-slate-50 py-20 lg:py-28 relative border-t border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1">
               <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
                AI Voice <span className="text-secondary">Employee</span>
               </h2>
               <p className="text-xl text-gray-500 leading-relaxed mb-4">
                Personalized Demo for <strong className="text-gray-900">{businessName}</strong>
               </p>
               <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Hear how our AI handles complex conversations, answers questions, and books appointments over the phone just like a human — but 24/7.
               </p>
               
               <div className="mt-8">
                   <button 
                    onClick={handlePhoneClick}
                    className="w-full sm:w-auto bg-[#f97316] text-white font-bold text-2xl px-10 py-5 rounded-full shadow-lg shadow-orange-200 hover:bg-[#ea580c] hover:-translate-y-1 transition-all flex items-center justify-center gap-4 animate-pulse-slow"
                   >
                     Call Now {phoneNumber}
                     <Phone fill="currentColor" size={28} />
                   </button>
               </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0ea5e9] to-teal-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <img 
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" 
                        alt="Customer Service Representative" 
                        className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md border border-white/40 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-800">Voice Active</span>
                    </div>
                    <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex items-center gap-2 mb-2">
                             <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-md">
                                 <UserCheck size={16} />
                             </div>
                             <span className="text-sm font-medium text-white/90">Sentiment Analysis</span>
                        </div>
                        <p className="text-2xl font-bold font-heading">Friendly & Professional</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRICING BANNER */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="mx-auto max-w-[1200px] bg-gradient-to-br from-[#00152e] via-[#002B5C] to-[#001226] rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden border border-white/10">
               <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
               
               <div className="relative z-10 max-w-3xl mx-auto">
                   <h3 className="text-xl md:text-2xl font-medium text-blue-100 mb-4 tracking-wide">Let GrowSmarter work for your business 24/7</h3>
                   <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight font-heading leading-tight">
                       Plans Start at <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">$397/month</span>
                   </h2>
                   
                   <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="https://api.leadconnectorhq.com/widget/booking/LaSQ8GSkaQP0OHLZ31VC" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-accent text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Let's do this <ArrowRight size={20} strokeWidth={3} />
                        </a>
                   </div>
               </div>
          </div>
      </section>

    </div>
  );
};
