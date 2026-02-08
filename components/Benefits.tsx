import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'Sarah K.',
    trade: 'HVAC Owner',
    quote: "Since using GrowSmarter, our booking rate has doubled. The automated follow-up is a game-changer and saves us hours every single day."
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
    name: 'Mike R.',
    trade: 'Med Spa Director',
    quote: "Our Google reviews went from 15 to over 150 in six months. The platform makes it so easy to manage our online reputation. Our credibility has skyrocketed!"
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    name: 'David L.',
    trade: 'Electrician',
    quote: "The all-in-one inbox is incredible. We never miss a customer message, whether it comes from Facebook, our website, or a text. Response times are instant."
  }
];

export const BenefitsContent: React.FC = () => {
  return (
    <section id="testimonials" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-heading sm:text-4xl text-primary">
            Trusted by Local Businesses Everywhere
          </h2>
          <p className="mt-4 text-lg text-neutral-medium">
            Don't just take our word for it. Here's what our customers are saying.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative bg-white p-8 rounded-xl shadow-premium border border-gray-200/80 overflow-hidden">
              <Quote className="absolute top-4 right-4 h-20 w-20 text-neutral-light/60" />
              <div className="relative z-10">
                <p className="text-neutral-medium italic">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full border-2 border-accent/50" />
                  <div className="ml-4">
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-accent font-semibold">{testimonial.trade}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};