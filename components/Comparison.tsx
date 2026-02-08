import React from 'react';
import { Wrench, Wind, Zap, Home, Sprout, SprayCan, Droplets, Smile, Bone, Car } from 'lucide-react';

const niches = [
    { name: 'Plumbing', icon: <Wrench/> },
    { name: 'HVAC', icon: <Wind/> },
    { name: 'Electrical', icon: <Zap/> },
    { name: 'Roofing', icon: <Home/> },
    { name: 'Landscaping', icon: <Sprout/> },
    { name: 'Cleaning', icon: <SprayCan/> },
    { name: 'Med Spas', icon: <Droplets/> },
    { name: 'Dental', icon: <Smile/> },
    { name: 'Chiropractic', icon: <Bone/> },
    { name: 'Auto Services', icon: <Car/> },
]

export const Niches: React.FC = () => {
  return (
    <section id="niches" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">Built for Every Local Service Business</h2>
          <p className="mt-4 text-lg text-neutral-medium">
            GrowSmarter adapts to your niche — whether you're a home service provider or a wellness professional.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {niches.map((niche) => (
            <div key={niche.name} className="flex flex-col items-center justify-center text-center p-4 rounded-lg transition-all duration-300 hover:bg-neutral-light hover:scale-105 hover:shadow-premium border border-transparent hover:border-gray-200">
                <div className="text-secondary">
                    {React.cloneElement(niche.icon, { className: 'h-10 w-10' })}
                </div>
                <p className="mt-4 font-semibold text-neutral-dark">{niche.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};