import React from 'react';
import { Video, Phone, Calendar, Mail, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Video className="h-8 w-8 text-accent"/>,
    title: 'Foot-In-Door Video',
    description: 'We create a personalized, attention-grabbing video and send it to a local business.',
  },
  {
    icon: <Phone className="h-8 w-8 text-accent"/>,
    title: 'Demo Call',
    description: 'Show examples and how automations + content grow revenue.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-accent"/>,
    title: '14-Day Free Trial',
    description: 'We load 2 weeks of content into your Social Planner.',
  },
  {
    icon: <Mail className="h-8 w-8 text-accent"/>,
    title: 'Reactivation Campaign',
    description: 'We revive old leads using automated SMS follow-up.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-accent"/>,
    title: 'Optional FB/IG Ads',
    description: 'Run video ads using our high-impact video clips for predictable new leads.',
  },
];

export const ServiceFlow: React.FC = () => {
  return (
    <section id="service-flow" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">Our Proven Content Growth System</h2>
        </div>

        <div className="mt-20 relative">
          <div 
            className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-300"
            aria-hidden="true"
          />
          
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                 <div className="relative z-10 flex items-center justify-center h-16 w-16 rounded-full bg-white border-2 border-accent shadow-md mb-4">
                   {step.icon}
                 </div>
                 <h3 className="text-lg font-semibold font-heading text-primary">{index + 1}. {step.title}</h3>
                 <p className="mt-2 text-sm text-neutral-medium max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};