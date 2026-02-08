import React from 'react';
import { AlertTriangle, Clock, MapPin, PhoneMissed } from 'lucide-react';

export const PlumberRealitySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-plumber-secondary mb-4">THE REALITY</h2>
            <p className="text-xl text-neutral-medium">When you're on a job, the phone keeps ringing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-plumber-secondary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-plumber-secondary">You're under a sink.</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-plumber-secondary">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-plumber-secondary">You're in a crawlspace fixing a slab leak.</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-neutral-light p-3 rounded-full text-plumber-secondary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-plumber-secondary">You're driving between service calls.</h3>
                </div>
              </div>
            </div>

            <div className="bg-neutral-light p-8 rounded-lg border-l-4 border-plumber-primary shadow-sm">
              <h3 className="text-xl font-bold text-plumber-secondary mb-6">Meanwhile:</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-neutral-dark">
                  <span className="w-2 h-2 bg-plumber-primary rounded-full"></span>
                  A homeowner's water heater is leaking all over the garage.
                </li>
                <li className="flex items-center gap-3 text-neutral-dark">
                  <span className="w-2 h-2 bg-plumber-primary rounded-full"></span>
                  Someone's main line is backing up into their house.
                </li>
                <li className="flex items-center gap-3 text-neutral-dark">
                  <span className="w-2 h-2 bg-plumber-primary rounded-full"></span>
                  A property manager has a tenant with no hot water.
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-lg font-bold text-plumber-secondary flex items-center gap-2">
                  <PhoneMissed className="w-5 h-5 text-plumber-accent" />
                  If no one answers, they call your competitor.
                </p>
                <p className="text-plumber-secondary mt-2 font-medium">And whoever answers first usually wins.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
