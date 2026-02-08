
import React from 'react';
import { Bot, MessageSquareText, Star, Smartphone, Mic, CalendarClock } from 'lucide-react';

const features = [
  { 
    name: 'AI Voice Receptionist', 
    icon: <Bot className="h-8 w-8 text-accent" />,
    description: 'A human-sounding AI that answers every call, day or night. It qualifies leads, answers FAQs, and books appointments directly into your calendar.'
  },
  { 
    name: 'Missed Call Text-Back', 
    icon: <Smartphone className="h-8 w-8 text-accent" />,
    description: 'If the AI is busy or a call drops, our system instantly texts the caller to keep the conversation alive and secure the lead.'
  },
  { 
    name: '24/7 Web Chat Agent', 
    icon: <MessageSquareText className="h-8 w-8 text-accent" />,
    description: 'Convert website visitors into booked jobs with an intelligent chat widget that captures info and schedules service while you sleep.'
  },
  { 
    name: 'Automated Review Growth', 
    icon: <Star className="h-8 w-8 text-accent" />,
    description: 'Automatically send review requests via SMS/Email after a job is done. Watch your Google rating climb without lifting a finger.'
  },
  { 
    name: 'Smart Scheduling & Reminders', 
    icon: <CalendarClock className="h-8 w-8 text-accent" />,
    description: 'Eliminate no-shows. The AI handles booking, confirmation, and reminders, syncing perfectly with your existing team schedule.'
  },
  { 
    name: 'Natural Language Processing', 
    icon: <Mic className="h-8 w-8 text-accent" />,
    description: 'Our agents understand context, accents, and complex queries, ensuring your customers feel heard and understood every time.'
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative bg-neutral-light py-20 sm:py-24 overflow-hidden">
      {/* Decorative Background Blobs for Glassmorphism Context */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading sm:text-5xl text-primary leading-tight">
            Turn Missed Leads Into <span className="text-secondary">Revenue</span>
          </h2>
          <p className="mt-6 text-xl text-neutral-medium">
            Don't just capture leads—close them. Our AI tools work together to ensure no opportunity slips through the cracks.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/60 shadow-premium hover:shadow-premium-hover transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/90"
            >
              {/* Subtle inner shine gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-60 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-soft-light-navy mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold font-heading text-primary text-center mb-3">{feature.name}</h3>
                <p className="text-sm text-neutral-medium text-center leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
