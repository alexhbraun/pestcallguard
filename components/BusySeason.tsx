import React from 'react';
import { Leaf, PhoneIncoming, Users, Phone, Megaphone } from 'lucide-react';

export const BusySeason = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-secondary mb-12 uppercase tracking-wide">BUSY SEASON IS HERE</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-secondary text-lg uppercase">Spring Hits</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-accent shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <p className="font-bold text-secondary text-lg uppercase">Calls Double</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-primary shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <p className="font-bold text-secondary text-lg uppercase">Ads Running</p>
            </div>
            
            <div className="bg-neutral-light p-8 rounded-lg text-center border-t-4 border-accent shadow-sm hover:shadow-md transition-all">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <p className="font-bold text-secondary text-lg uppercase">Techs Booked</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center">
             <h3 className="text-2xl font-bold text-secondary mb-4 uppercase">
                That’s when <span className="text-primary decoration-accent underline decoration-4 underline-offset-4">missed calls spike</span>.
             </h3>
             <p className="text-lg text-neutral-medium font-medium leading-relaxed">
                PestAnswer keeps your schedule full without forcing you to hire another office employee.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};
