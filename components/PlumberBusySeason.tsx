import React from 'react';
import { Snowflake, Phone, Users, Droplet } from 'lucide-react';

export const PlumberBusySeason = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-plumber-secondary mb-12 uppercase tracking-wide">WINTER HITS HARD</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-plumber-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Snowflake className="w-6 h-6 text-plumber-primary" />
              </div>
              <p className="font-bold text-plumber-secondary text-lg uppercase">Temps Drop</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-plumber-accent shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Droplet className="w-6 h-6 text-plumber-accent" />
              </div>
              <p className="font-bold text-plumber-secondary text-lg uppercase">Pipes Freeze</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-plumber-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Phone className="w-6 h-6 text-plumber-primary" />
              </div>
              <p className="font-bold text-plumber-secondary text-lg uppercase">Calls Spike</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-plumber-accent shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users className="w-6 h-6 text-plumber-accent" />
              </div>
              <p className="font-bold text-plumber-secondary text-lg uppercase">Techs Booked</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
             <h3 className="text-2xl font-bold text-plumber-secondary mb-4 uppercase">
                That's when <span className="text-plumber-primary decoration-plumber-accent underline decoration-4 underline-offset-4">missed calls spike</span>.
             </h3>
             <p className="text-lg text-neutral-medium font-medium leading-relaxed">
                When temperatures drop and pipes freeze, your phone rings non-stop. Water heaters fail. Burst pipes flood homes. PlumbGuard keeps your schedule full without forcing you to hire another dispatcher.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};
