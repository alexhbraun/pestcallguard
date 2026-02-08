
import React, { useState } from 'react';
import { Play, Pause, PhoneCall, MessageSquare } from 'lucide-react';

export const AudioDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Placeholder toggle
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="audio-demo" className="bg-primary py-20 sm:py-24 relative overflow-hidden text-white">
       {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide text-green-300">Live Audio Capability</span>
          </div>
          <h2 className="text-3xl font-bold font-heading sm:text-4xl text-white">
            Listen to the AI Receptionist
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Indistinguishable from a human. Our AI agents handle scheduling, FAQ answers, and lead qualification seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Audio Player Card - Dark Glassmorphism */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative">
                <div className="bg-black/20 px-6 py-4 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                            <PhoneCall className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <p className="text-white font-semibold">Inbound Booking Call</p>
                            <p className="text-blue-200 text-xs">AI Agent vs. New Customer</p>
                        </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 rounded-full border border-green-500/30 text-green-400 text-xs font-medium animate-pulse">
                        Live Demo
                    </div>
                </div>
                
                <div className="p-8 flex flex-col items-center">
                    <div className="w-full h-32 bg-black/20 rounded-xl flex items-center justify-center relative mb-8 overflow-hidden border border-white/5">
                        {/* Fake waveform visual */}
                        <div className="flex items-end gap-1 h-12">
                            {[...Array(20)].map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`w-1.5 bg-accent rounded-t-sm transition-all duration-300 ${isPlaying ? 'animate-pulse' : ''}`}
                                    style={{ 
                                        height: `${Math.random() * 100}%`,
                                        animationDelay: `${i * 0.1}s`,
                                        opacity: isPlaying ? 1 : 0.5
                                    }} 
                                />
                            ))}
                        </div>
                        
                        {/* Play Button Overlay */}
                         <button 
                            onClick={togglePlay}
                            className="absolute inset-0 m-auto h-16 w-16 bg-accent hover:bg-white hover:text-accent text-white rounded-full shadow-lg shadow-accent/20 flex items-center justify-center transition-all hover:scale-105 group"
                        >
                            {isPlaying ? (
                                <Pause className="h-6 w-6 fill-current" />
                            ) : (
                                <Play className="h-6 w-6 fill-current ml-1" />
                            )}
                        </button>
                    </div>

                    <div className="w-full space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-xs text-gray-400">User</div>
                            <div className="bg-white/10 rounded-lg rounded-tl-none p-3 text-sm text-gray-200 max-w-[80%] border border-white/5">
                                <p>Hi, I was wondering if you have any appointments available for a consultation this Tuesday?</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 flex-row-reverse">
                            <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0 border border-white/20">
                                <span className="text-white text-xs font-bold">AI</span>
                            </div>
                            <div className="bg-accent/80 backdrop-blur-sm border border-accent/50 rounded-lg rounded-tr-none p-3 text-sm text-white max-w-[80%] shadow-lg">
                                <p>Absolutely! I can certainly help you with that. I have an opening at 10:00 AM or 2:00 PM on Tuesday. Which one works better for you?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description/Benefits */}
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                        <PhoneCall className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Handles Context Switching</h3>
                        <p className="text-blue-100/80">Unlike basic IVR menus, our AI understands interruptions, accents, and context changes naturally.</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                        <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Instant SMS Follow-up</h3>
                        <p className="text-blue-100/80">If the user hangs up or needs a link, the AI instantly sends a text message to continue the conversation.</p>
                    </div>
                </div>
                
                 <div className="p-6 bg-white/5 border-l-4 border-secondary rounded-r-xl backdrop-blur-sm">
                    <p className="text-white font-medium italic">
                        "This sounds 10x better than our previous answering service, and it costs a fraction of the price."
                    </p>
                    <p className="mt-2 text-sm text-gray-400">— Marketing Director, Local Agency</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
